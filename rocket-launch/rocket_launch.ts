interface Rocket{
  name: string
  payload_capacity: number
  manufacturer: Manufacturer
}

enum Manufacturer{
  SPACE_X,
  SOYUZ,
  BOEING,
  AIRBUS
}

interface PassengerRocket extends Rocket{
  passengers_capacity: number
}

interface RocketLaunch {
  rocket: Rocket
  date: number
  name?: string
}

