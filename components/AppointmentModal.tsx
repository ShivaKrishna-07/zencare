"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Appointment } from "@/types/appwrite.types";
import AppointmentForm from "./forms/AppointmentForm";

const AppointmentModal = ({
    type,
    patientId,
    userId,
    appointmentId
}: {type: 'schedule' | 'cancel'
    patientId: string,
    userId: string,
    appointmentId: Appointment
}) => {

    const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost" className={`capitalize ${type === 'schedule' && 'text-green-500'}`}>
            {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
          <DialogDescription>
            Please fill the following details to {type} Appointment
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm
            type={type}
            userId={userId}
            patientId={patientId}
            appointment={appointmentId}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
