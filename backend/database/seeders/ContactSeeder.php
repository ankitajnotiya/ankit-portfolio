<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('contacts')->insert([
            [
                'name' => 'Ankit Jnotiya',
                'email' => 'ankit@example.com',
                'phone' => '+91 98765 43210',
                'subject' => 'Project Inquiry',
                'message' => 'Hi, I am interested in discussing a web development project. Please let me know your availability.',
                'created_at' => now(),
                'status' => 'new'
            ],
            [
                'name' => 'Rahul Sharma',
                'email' => 'rahul.sharma@gmail.com',
                'phone' => '+91 91234 56789',
                'subject' => 'Portfolio Website',
                'message' => 'Love your portfolio! Can you help me build something similar for my business?',
                'created_at' => now(),
                'status' => 'new'
            ],
            [
                'name' => 'Priya Patel',
                'email' => 'priya.patel@yahoo.com',
                'phone' => '+91 87654 32109',
                'subject' => 'Job Opportunity',
                'message' => 'We have an opening for a full-stack developer. Your profile looks interesting. Would you like to discuss?',
                'created_at' => now()->subDays(1),
                'status' => 'read'
            ],
                    ]);
    }
}
