<template>
  <div class="calendar">
    <div class="calendar-panel">
      <icon name="arrow_left" color="#4A8DFF" @click="previous" />
      <span class="current">{{ monthes[currentMonth] }} {{ currentYear }}</span>
      <icon name="arrow_right" color="#4A8DFF" @click="next" />
    </div>
    <table cellspacing="4px">
      <thead>
        <tr>
          <th>Пон</th>
          <th>Вт</th>
          <th>Ср</th>
          <th>Чт</th>
          <th>Пт</th>
          <th>Сб</th>
          <th>Вос</th>
        </tr>
      </thead>
      <tbody id="calendar-body">
        <tr v-for="(row, index) in date" :key="index">
          <td v-for="(col, jndex) in date[index]" :key="jndex" :class="{ selected: col.selected }" @click="selectDate(index, col)">
            <span v-if="col">{{ col.day }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => ({
    today: '',
    currentMonth: '',
    currentYear:  '',
    year: 2020,
    monthes: {0:"Январь", 1:"Февраль", 2:"Март", 3:"Апрель", 4:"Май", 5:"Июнь", 6:"Июль", 7:"Август", 8:"Сентябрь", 9:"Открябрь", 10:"Ноябрь", 11:"Декабрь"},
    date: {},
    firstDateSelected: 0,
    secondDateSelected: 0,
    selectedCount: 0
  }),
  methods: {
    next () {
      this.currentMonth++;
    },
    prev () {
      this.currentMonth--;
    },
    daysInMonth (month, year) {
      return 32 - new Date(year, month, 32).getDate();
    },
    showCalendar (year, month) {
      let firstDay = (new Date(year, month)).getDay();
      this.date = {};
      let date = 1;
      for (let i = 0; i < 6; i++) {
        let r_name = `row_${i}`;
        this.date[r_name] = [];

        for (let j = 1; j < 8; j++) {
          if (i === 0 && j < firstDay) {
            this.date[r_name].push(0);
          }
          else if (date > this.daysInMonth(month, year)) {
            break;
          } else {
            if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
                // cell.classList.add("bg-info");
            } // color today's date
            this.date[r_name].push({ day: date, selected: false });
            date++;
          }
        }
      }
    },
    next() {
      this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
      this.currentMonth = (this.currentMonth + 1) % 12;
      this.showCalendar(this.currentYear, this.currentMonth);
    },
    previous() {
      this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
      this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
      this.showCalendar(this.currentYear, this.currentMonth);
    },
    selectDate (row, col) {
      let newDate = this.date;
      this.date = {};

      this.selectedCount++;

      if (this.selectedCount === 1) {
        this.firstDateSelected = col.day;
      }

      if (this.selectedCount < 3) {
        for (let i in newDate[row]) {
          if (newDate[row][i].day === col.day) {
            newDate[row][i].selected = true;
          }
        }
      } else {
        for (let i in newDate['row_0']) {
          if (newDate['row_0'] && newDate['row_0'][i] && newDate['row_0'][i].selected) {
            newDate['row_0'][i].selected = false;
          }
        }
        for (let i in newDate['row_1']) {
          if (newDate['row_1'] && newDate['row_1'][i] && newDate['row_1'][i].selected) {
            newDate['row_1'][i].selected = false;
          }
        }
        for (let i in newDate['row_2']) {
          if (newDate['row_2'] && newDate['row_2'][i] && newDate['row_2'][i].selected) {
            newDate['row_2'][i].selected = false;
          }
        }
        for (let i in newDate['row_3']) {
          if (newDate['row_3'] && newDate['row_3'][i] && newDate['row_3'][i].selected) {
            newDate['row_3'][i].selected = false;
          }
        }
        for (let i in newDate['row_4']) {
          if (newDate['row_4'] && newDate['row_4'][i] && newDate['row_4'][i].selected) {
            newDate['row_4'][i].selected = false;
          }
        }
        for (let i in newDate['row_5']) {
          if (newDate['row_5'] && newDate['row_5'][i] && newDate['row_5'][i].selected) {
            newDate['row_5'][i].selected = false;
          }
        }
        this.selectedCount = 0;
      }

      if (this.selectedCount === 2) {
        this.secondDateSelected = col.day;

        for (let row in newDate) {
          for (let col in newDate[row]) {
            if (newDate[row][col]) {
              if (newDate[row][col].day >= this.firstDateSelected && newDate[row][col].day <= this.secondDateSelected)
                newDate[row][col].selected = true;
            }
          }
        }

        let year = this.currentYear;
        let month = this.currentMonth < 10 ? `0${this.currentMonth + 1}` : this.currentMonth + 1;

        this.$emit('dateHandler', {
          dateFrom: `${year}-${month}-${this.firstDateSelected < 10 ? `0${this.firstDateSelected}` : this.firstDateSelected}`,
          dateTo: `${year}-${month}-${this.secondDateSelected < 10 ? `0${this.secondDateSelected}` : this.secondDateSelected}`,
        });

      }

      this.date = newDate;

    },
  },
  mounted () {
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.showCalendar(this.currentYear, this.currentMonth);
  }
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/calendar.scss">
</style>