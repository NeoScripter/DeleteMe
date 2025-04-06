<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;

use Illuminate\Queue\SerializesModels;

class Request extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $phone;
    public $email;
    /**
     * Create a new message instance.
     */
    public function __construct($name, $phone, $email)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('admin@delete.name', 'DeleteMe'),
            subject: 'Новый запрос на консультацию',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail',
            with: ['name' => $this->name, 'phone' => $this->phone, 'email' => $this->email],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
