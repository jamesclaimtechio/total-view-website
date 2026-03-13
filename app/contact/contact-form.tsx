"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with Resend API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="h-12 w-12 text-[#10B981]" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900">
          Thanks! We&apos;ll be in touch within 24 hours.
        </h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input id="company" name="company" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="inquiry">Inquiry Type *</Label>
        <Select name="inquiry" required>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select type..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="support">Support</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
            <SelectItem value="press">Press</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
