<template>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
        const amounts = await API.graphql({
          query: getTimeSlot,
          variables: { id: this.timeslot }
        })
        if(amount - this.adults - this.children &lt; 0) {
          this.$q.notify({ message: 'Not enough space in selected time slot', classes: 'bango', color: 'red' })
        } else if (groups &lt;= 0 ) {
          this.$q.notify({ message: 'Not enough space in selected time slot', classes: 'bango', color: 'red' })
        } else {
          let newAmount = amount - this.adults - this.children
          await API.graphql ({
            query: updateTimeSlot,
            variables: { input: { id: this.timeslot, amount: newAmount, groups: groups-1 } }
          })
          const bookingInfo = { 
            // This contains the form data
          }
          let bookingConfirm = await API.graphql({
            query: createBooking,
            variables: { input: bookingInfo }
          })
          if (bookingConfirm) {
            this.$q.notify({ message: 'Successfully booked', classes: 'bango', color: 'green' })
            this.$router.push({name: 'Confirmation', params: {bookingID: bookingConfirm.data.createBooking.id}})
          }
        }
        </code>
      </pre>
    </div>
</template>

<style lang="sass">
code
  font-size: 12px!important
</style>
