

# Doctor Booking UI Module

This project is a **responsive and accessible appointment booking UI** built for a healthcare platform. It was developed as part of a frontend assignment for InVitro Capital. The application is built with **React** and **TailwindCSS**, and it uses **mock data** stored in **localStorage** to simulate booking appointments.

## 🚀 Features

### 1. **Doctor Directory View**
- Displays a mock list of doctors with:
  - Name
  - Photo
  - Specialty
  - Rating (optional)
  - Availability
  - Location
- Includes filters by:
  - Specialty
  - Availability
- Each doctor card has a **"Book Appointment"** button

### 2. **Booking Modal / Form**
- Opens when user clicks on "Book Appointment"
- Displays:
  - Doctor name
  - Available time slots (mocked)
- Patient can:
  - Enter name, phone, and email
  - Select a time slot
  - Submit booking
- Booking is stored in `localStorage`

### 3. **Appointments Summary View**
- Lists all booked appointments
- Displays:
  - Doctor Name
  - Specialty
  - Location
  - Time
  - Patient Name
  - Phone and Email
- Allows deletion of:
  - Individual appointment
  - All appointments at once

---

## 🧱 Components Structure

### `Home.jsx`
- Displays all doctor cards using mock data.
- Contains specialty and availability filters.
- Navigates to the booking form via React Router.

### `DoctorCard.jsx`
- Reusable card for displaying doctor information.
- Accepts props for name, image, specialty, etc.

### `BookingForm.jsx`
- Form page that appears after selecting a doctor.
- Uses `useLocation` to access selected doctor data.
- Collects patient info and selected time slot.
- Saves appointment to localStorage.

### `Appointments.jsx`
- Lists all booked appointments.
- Pulls data from localStorage.
- Allows deletion of single or all appointments.

---

## 🧠 State Management
- Local component state is managed via `useState`.
- Data persistence handled via `localStorage` (no backend).

---

## 🎯 Accessibility
- All elements are keyboard-navigable
- ARIA attributes like `aria-label`, `aria-describedby` are used where appropriate
- Inputs have associated labels
- Button and form elements are semantic and accessible

---

## 🎨 Styling
- All styling done using **TailwindCSS** for rapid design
- Responsive across:
  - Mobile
  - Tablet
  - Desktop

---

## 🤖 AI Tools Used
- **ChatGPT**: Used to brainstorm UI logic, improve accessibility, and polish component structure.
- **Cursor**: Helped scaffold reusable components and speed up UI construction.
- **Lighthouse / axe DevTools**: Ensured accessibility standards were met (color contrast, ARIA roles, keyboard navigation).

---

## 🛠️ How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/your-username/doctor-booking-ui.git
cd doctor-booking-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev

```

---

## 🧪 Known Limitations
- No backend — all data is mock and saved in `localStorage`
- No validation on overlapping bookings
- No real-time updates between components

---

## 📌 Next Steps (if continued)
- Add backend API integration
- Add login for patient profiles
- Add admin dashboard for managing bookings
- Improve visual design for more professional look

---

## 👩‍💻 Developed By

**Neama**  
Frontend Developer  
Submitted to: **InVitro Capital** — Front-End Assignment (April 2025)
