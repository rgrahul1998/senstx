import { useState } from "react"
import { useForm } from "react-hook-form"
import { Loader2 } from "lucide-react"
import Modal from "../../components/common/Modal"
import { Input } from "../../components/common/Inputs"
import { Textarea } from "../../components/common/Textarea"
import { Label } from "../../components/common/Label"
import { Button } from "../../components/common/Button"
import {
    type JobOpening,
    type JobApplication,
    uploadFile,
    submitJobApplication,
} from "../../api/career"

interface JobApplicationModalProps {
    open: boolean
    onClose: () => void
    job: JobOpening | null
}

export default function JobApplicationModal({ open, onClose, job }: JobApplicationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<JobApplication>()

    const onSubmit = async (data: any) => {
        setIsSubmitting(true)
        setErrorMessage("")
        setSuccessMessage("")

        try {
            let resumeUrl = ""
            if (data.resume && data.resume.length > 0) {
                // Upload resume
                resumeUrl = await uploadFile(data.resume[0])
            } else {
                throw new Error("Resume is required")
            }

            await submitJobApplication({
                ...data,
                ...(job && { job_opening: job.name }),
                resume: resumeUrl,
                experience_years: Number(data.experience_years),
            })

            setSuccessMessage("Application submitted successfully!")
            setTimeout(() => {
                onClose()
                reset()
                setSuccessMessage("")
            }, 2000)
        } catch (error: any) {
            console.error(error)
            setErrorMessage(error.message || "Failed to submit application")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={job ? `Apply for ${job.job_title}` : "Job Application"}
        >
            {successMessage ? (
                <div className="p-4 bg-green-50 text-green-700 rounded-md">{successMessage}</div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
                    {errorMessage && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-md">{errorMessage}</div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                            id="full_name"
                            {...register("full_name", { required: "Full name is required" })}
                        />
                        {errors.full_name && (
                            <p className="text-red-500 text-sm">{errors.full_name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                            id="phone"
                            {...register("phone", { required: "Phone is required" })}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                        <Input id="linkedin_url" {...register("linkedin_url")} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="experience_years">Experience (Years)</Label>
                        <Input
                            id="experience_years"
                            type="number"
                            {...register("experience_years")}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="resume">Resume (File) *</Label>
                        <Input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                            {...register("resume", { required: "Resume is required" })}
                        />
                        {errors.resume && (
                            <p className="text-red-500 text-sm">
                                {errors.resume.message as string}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cover_letter">Cover Letter</Label>
                        <Textarea id="cover_letter" rows={4} {...register("cover_letter")} />
                    </div>

                    <div className="pt-4 flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                            ) : null}
                            Submit Application
                        </Button>
                    </div>
                </form>
            )}
        </Modal>
    )
}
