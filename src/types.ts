export type Attendance = 'yes' | 'no' | ''

export interface RsvpFormData {
  name: string
  email: string
  attendance: Attendance
  message: string
}

export interface GalleryImage {
  src: string
  alt: string
}
