<?php

// database/seeders/SurveySeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Survey;

class SurveySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Survey::create([
            'survey_data' => json_encode([
                'title' => 'Demo Survey',
                'questions' => [
                    [
                        'type' => 'text',
                        'name' => 'question1',
                        'title' => 'What is your name?'
                    ],
                    [
                        'type' => 'rating',
                        'name' => 'question2',
                        'title' => 'Rate our service',
                        'rateMin' => 1,
                        'rateMax' => 5
                    ]
                ]
            ])
        ]);
    }
}

