<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Log incoming request for debugging
        \Log::info('Contact form request received', [
            'method' => $request->method(),
            'data' => $request->all(),
            'headers' => $request->headers->all()
        ]);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|min:3'
        ]);

        try {
            $validated['status'] = 'new';
            $validated['created_at'] = now();
            $contact = Contact::create($validated);
            
            \Log::info('Contact created successfully', ['contact_id' => $contact->id]);
            
            return response()->json([
                'success' => true,
                'message' => 'Message sent successfully!',
                'data' => $contact
            ]);
        } catch (\Exception $e) {
            \Log::error('Contact creation failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return response()->json([
                'success' => false,
                'message' => 'Error sending message. Please try again.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
