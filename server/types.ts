export interface AirtableResponse<T> {
  records: Record<T>[];
}
export interface Record<T> {
  id: string;
  fields: T;
  createdTime: string;
}

export interface User {
  Username: string;
  Password: string;
}

export interface Event {
  "Start Time": string | undefined;
  "Pickup Address": string[] | undefined;
  "Total Count of Drivers for Event": number | undefined;
  "Total Count of Distributors for Event": number | undefined;
  "Total Count of Volunteers for Event": number | undefined;
  "Special Event": boolean | undefined;
  Supplier: string[] | undefined;
  "📅 Scheduled Slots": string[] | undefined;
}

export interface ProcessedEvent {
  id: string;
  dateDisplay: string;
  date: Date;
  time: string;
  mainLocation: string;
  numDrivers: number;
  numPackers: number;
  numtotalParticipants: number;
  numOnlyDrivers: number;
  numOnlyPackers: number;
  numBothDriversAndPackers: number;
  numSpecialGroups: number;
  scheduledSlots: string[];
  supplierId: string;
  allEventIds: string[];
}

export interface ScheduledSlot {
  "First Name": string[] | undefined;
  "Last Name": string[] | undefined;
  "Total Deliveries": number | undefined;
  "Can't Come": boolean | undefined;
  "Correct slot time": any | undefined;
  Type: string[] | undefined;
  "Confirmed?": boolean | undefined;
  "Volunteer Status": string[] | undefined;
  "Phone Formula": string | undefined;
  Email: string[] | undefined;
  "Volunteer Group (for MAKE)": string | undefined;
}

export interface ProcessedScheduledSlot {
  id: string;
  firstName: string;
  lastName: string;
  totalDeliveries?: number;
  cantCome: boolean;
  timeSlot: string;
  participantType: string;
  confirmed: boolean;
  volunteerStatus: string;
  email: string;
  phoneNumber: string;
  specialGroup: string | null;
}

export interface Driver {
  "First Name": string[] | undefined;
  "Last Name": string[] | undefined;
  "Driving Slot Time": string[] | undefined;
  "Total Deliveries": number | undefined;
  "Zip Code": string[] | undefined;
  "Transportation Types": string[] | undefined;
  "Restricted Neighborhoods": string[] | undefined;
  "📍 Drop off location": string[] | undefined;
  "Phone Formula": string | undefined;
  Email: string[] | undefined;
}

export interface ProcessedDriver {
  id: string;
  firstName: string;
  lastName: string;
  timeSlot: string;
  deliveryCount: number;
  zipCode: string;
  vehicle: string;
  restrictedLocations: string[];
  dropoffLocations: string[];
  phoneNumber: string;
  email: string;
}

export interface Neighborhood {
  id: string;
  Name: string;
}

export interface DropoffLocation {
  "Drop off location": string | undefined;
  "Drop-off Address": string | undefined;
  "Neighborhood (from Zip Code)": string[] | undefined;
  "Starts accepting at": string | undefined;
  "Stops accepting at": string | undefined;
  "Total Loads": number | undefined;
  "POC Name List": string | undefined;
  "POC Phone Number List": string | undefined;
  "Location Email": string | undefined;
  "# of Loads Requested": number | undefined;
}

export interface ProcessedDropoffLocation {
  id: string;
  siteName: string;
  address: string;
  neighborhoods: string[];
  startTime: string | null;
  endTime: string | null;
  deliveriesNeeded: number;
  pocNameList: string[];
  pocPhoneNumberList: string[];
  locationEmail: string;
  deliveriesAssigned: number;
  matchedDrivers: string[];
}

export interface SpecialGroup {
  Name: string | undefined;
  "🚛 Supplier Pickup Events": string[] | undefined;
  "Shortened Link to Special Event Signup Form": string | undefined;
}

export interface ProcessedSpecialGroup {
  id: string;
  name: string;
  events: string[];
}

export interface SpecialEvent {
  "Volunteer Group": string | undefined;
  "Link to Special Event Signup Form": string | undefined;
}

export interface ProcessedSpecialEvent {
  id: string;
  specialGroupId: string;
  eventSignUpLink: string;
}
