export const FUEL_TYPES = [
  { value: 'octane', label: 'Octane (অকটেন)' },
  { value: 'petrol', label: 'Petrol (পেট্রোল)' },
  { value: 'diesel', label: 'Diesel (ডিজেল)' },
];

export const APPLICATION_STATUS = {
  SUBMITTED: 'submitted',
  VERIFYING: 'verifying',
  APPROVED: 'approved',
  ISSUED: 'issued',
};

export const MOCK_USER = {
  name: 'Zunaid Hasan',
  nid: '1990261654321',
  vehicleNo: 'Dhaka Metro-GA-12-3456',
  phone: '01960569957',
  status: APPLICATION_STATUS.APPROVED,
  cardNo: 'FC-8823-9910',
  expiryDate: '12/2028',
  balance: 50.0,
  maxLimit: 100.0,
};

export const MOCK_STATIONS = [
  { id: 1, name: 'Trust Filling Station', lat: 23.7511, lng: 90.3934, address: 'Karwan Bazar, Dhaka' },
  { id: 2, name: 'SA Petrol Pump', lat: 23.7947, lng: 90.4043, address: 'Banani, Dhaka' },
  { id: 3, name: ' Meghna Petroleum', lat: 23.7073, lng: 90.4155, address: 'Motijheel, Dhaka' },
];
