import { Component } from '@angular/core';
import { aiArr, mathArr,roboticsArr,businessArr, geographyArr, psychologyArr , biologyArr } from './const/card';
import { empArr} from './const/table';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardandtable-project';
  cardArr = aiArr;
  MathArr = mathArr;
  roboticsArr = roboticsArr;
  businessArr = businessArr;
  geographyArr = geographyArr;
  psychologyArr = psychologyArr;
  biologyArr = biologyArr;

  empArr = empArr;
  
}
