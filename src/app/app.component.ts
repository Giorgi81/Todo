import { isNgTemplate } from '@angular/compiler';
import { Component, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { elementAt, isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  title = 'Todo list';

  list: any[] = []
  fieldText = document.getElementById('text')


  error = function () {
    document.getElementsByTagName('p')[0].style.display = 'none'
}


  add(item: string) {

    if(item !== ''){
      document.getElementsByTagName('input')[0].value = ''

    }

    



    if (item == '') {
      document.getElementsByTagName('p')[0].style.display = 'flex'


      setTimeout(this.error, 1000)
    } else if (this.list.length >= 3) {

      


      document.getElementsByTagName('p')[1].style.display = 'flex'



    } else {
      this.list.push({ id: this.list.length, name: item })


    }

  }

  remove(id:number) {

    this.list = this.list.filter(item => item.id !== id)
    document.getElementsByTagName('p')[1].style.display = 'none'

  }
}

