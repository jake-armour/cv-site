<template>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
type Date @model {
  id: ID!
  datestring: String!
  value: String!
  timeslots: [TimeSlot] @connection(keyName: "byDate", fields: ["id"])
}

type TimeSlot @model @key(name: "byDate", fields: ["dateID"])  {
  id: ID!
  timestring: String!
  value: String!
  amount: Int!
  groups: Int!
  dateID: ID!
  date: Date @connection(fields: ["dateID"])
  bookings: [Booking] @connection(keyName: "byTimeSlot", fields: ["id"])
}

type Booking @model @key(name: "byTimeSlot", fields: ["timeslotID"]) {
  id: ID!
  first_name: String!
  surname: String!
  adults: Int!
  children: Int!
  households: Int!
  phone: String!
  arrived: Boolean!
  cancelled: Boolean!
  timeslotID: ID!
  timeslot: TimeSlot @connection(fields: ["timeslotID"])
}
        </code>
      </pre>
    </div>
</template>
