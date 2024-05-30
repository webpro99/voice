<?php

// app/Http/Controllers/SurveyController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\SurveyResponse;

class SurveyController extends Controller
{
    public function index()
    {
        $surveys = Survey::all();
        return response()->json($surveys);
    }
    public function storeResponse(Request $request, $id)
    {
        $validatedData = $request->validate([
            'responses' => 'required|json',
        ]);

        $survey = Survey::findOrFail($id);
        $response = new SurveyResponse();
        $response->survey_id = $survey->id;
        $response->response_data = $validatedData['responses'];
        $response->save();

        return response()->json(['success' => true, 'response_id' => $response->id]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'survey' => 'required|json',
        ]);

        $survey = new Survey();
        $survey->survey_data = $validatedData['survey'];
        $survey->save();

        return response()->json(['success' => true, 'survey_id' => $survey->id]);
    }

    public function show($id)
{
    try {
        $survey = Survey::findOrFail($id);
        return response()->json($survey);
    } catch (\Exception $e) {
        // Log the error for debugging purposes
        \Log::error('Error fetching survey: ' . $e->getMessage());

        // Return an error response with a helpful message
        return response()->json(['error' => 'Unable to fetch survey.'], 500);
    }
}
public function getResponses($id)
{
    try {
        $responses = SurveyResponse::where('survey_id', $id)->get();
        return response()->json($responses);
    }
    catch (\Exception $e) {
        return response()->json(['error' => 'Unable to fetch SurveyResponse.'], 500);

    }
 
}

}

