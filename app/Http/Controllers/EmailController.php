<?php

namespace App\Http\Controllers;

use App\Mail\Request as MailRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:30',
            'email' => 'required|email|max:255',
        ]);


        $recipientEmail = 'is@maltsevip.ru';

        Mail::to($recipientEmail)->send(
            new MailRequest($validated['name'], $validated['phone'], $validated['email'])
        );
    }
}

