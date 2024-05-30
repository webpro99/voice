<?php

// app/Models/MerchantSurvey.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MerchantSurvey extends Model
{
    use HasFactory;

    protected $table = 'merchant_surveys';

    public function questions()
    {
        return $this->hasMany(Question::class, 'surveyId');
    }
}

// app/Models/Question.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $table = 'questions';

    public function survey()
    {
        return $this->belongsTo(MerchantSurvey::class, 'surveyId');
    }
}
