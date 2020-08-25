import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { isWithinInterval, isBefore } from 'date-fns';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  startDate;
  endDate;
  generalValue;
  isCustomDate:boolean;
  invalidSelection:boolean = false;
  data = [
    {
      name: 'Try',
      date: '2020-08-25',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-24',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-23',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-22',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-21',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-20',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-19',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-18',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-17',
      desc: 'lorem ipsum'
    },
    {
      name: 'fry',
      date: '2020-08-16',
      desc: 'lorem ipsum'
    },
    {
      name: 'cry',
      date: '2020-08-27',
      desc: 'lorem ipsum'
    },
    {
      name: 'dry',
      date: '2020-08-11',
      desc: 'lorem ipsum'
    },
    {
      name: 'pray',
      date: '2020-08-12',
      desc: 'lorem ipsum'
    },
    {
      name: 'pray',
      date: '2020-07-26',
      desc: 'lorem ipsum'
    },
    {
      name: 'pray',
      date: '2020-07-20',
      desc: 'lorem ipsum'
    },
  ]

  array = ['Today','Yesterday','Last Week','Last Month']

  filtered = [...this.data];
  newfilter;

  constructor(public navCtrl: NavController) {}

  loadResults(){
    if(!this.startDate || !this.endDate) {
      console.log('Date is missing')
      return
    }

    const startDate = new Date(this.startDate)
    const endDate = new Date(this.endDate)
    
    this.filtered = this.data.filter(item => {
      return isWithinInterval(new Date(item.date),{start:startDate,end:endDate})
    })
  }

  dropdown(){
    // alert(this.newfilter.toLowerCase());
    // const date = new Date();
    // alert(date)
    // if(this.newfilter.toLowerCase() == 'today'){
    //   this.filtered = this.data.filter(item => {
    //     alert(new Date(item.date))
    //   let yes:boolean = isWithinInterval(new Date(item.date),{start:date,end: date})
    //   // alert(yes)
    //   return yes
    // })
    // } else {
    //   alert('Cant reach any filter')
    // }
  }

  filterByDate(filterRequest: any) {
    alert(filterRequest)
    if (filterRequest === 'today') {
      let startDate = new Date();
      startDate.setHours(0,0,0);

      let endDate = new Date();
      endDate.setHours(23,59,59);
      alert(startDate+"-"+endDate)

      this.filtered = this.data.filter(item => {
      return isWithinInterval(new Date(item.date),{start:startDate,end:endDate})
    })
    } if (filterRequest === 'yesterday') {
      let startDate = new Date();
      startDate.setDate(startDate.getDate()-1);
      startDate.setHours(0,0,0);

      let endDate = new Date();
      endDate.setDate(endDate.getDate()-1);
      endDate.setHours(23,59,59);
      alert(startDate+"-"+endDate)
      this.filtered = this.data.filter(item => {
      return isWithinInterval(new Date(item.date),{start:startDate,end:endDate})
      })
    } if (filterRequest === 'sevenDays'){
      let startDate = new Date();
      startDate.setDate(startDate.getDate()-7);
      startDate.setHours(0,0,0);

      let endDate = new Date();
      endDate.setDate(endDate.getDate());
      endDate.setHours(23,59,59);
      alert(startDate+"-"+endDate)
      this.filtered = this.data.filter(item => {
      return isWithinInterval(new Date(item.date),{start:startDate,end:endDate})
      })
    } if (filterRequest === 'thirtyDays'){
      let startDate = new Date();
      startDate.setDate(startDate.getDate()-30);
      startDate.setHours(0,0,0);

      let endDate = new Date();
      endDate.setDate(endDate.getDate());
      endDate.setHours(23,59,59);
      alert(startDate+"-"+endDate)
      this.filtered = this.data.filter(item => {
      return isWithinInterval(new Date(item.date),{start:startDate,end:endDate})
      })
    } if (filterRequest === 'lastMonth'){
      let startDate = new Date();
      startDate.setDate(startDate.getDate()-60);
      startDate.setHours(0,0,0);

      let endDate = new Date();
      endDate.setDate(endDate.getDate()-30);
      endDate.setHours(23,59,59);
      alert(startDate+"-"+endDate)
      this.filtered = this.data.filter(item => {
      return isWithinInterval(new Date(item.date),{start:startDate,end:endDate})
      })
    } if (filterRequest === 'custom'){}
  }

  print(){
    alert(this.newfilter);
  }

}
