<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;

class Review extends Model
{
    use HasFactory;
    
    protected $table = 'reviews';
    protected $fillable = [
        'user_id', 'course_id', 'rating', 'note'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
