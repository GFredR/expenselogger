import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from '@ionic/angular';
import {AddExpenseComponent} from '../../shared/components/add-expense/add-expense.component';
import {DataService} from '../../services/data/data.service';
import {Expenseinterface} from '../../interface/expenseinterface';
import {BehaviorSubject, SubscriptionLike} from 'rxjs';
import {ActionService} from '../../services/action/action.service';
import {DatetimeService} from '../../services/datetime/datetime.service';
import {ExpenseTypes} from '../../constants/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  expenses: Expenseinterface[];
  subscription: SubscriptionLike;
  // todayDate: Date;
  installDate: Date;
  selectedDate: Date;
  todayDate: Date;
  expenseTypes: any;
  datesSubscription: SubscriptionLike;
  totalSubscription: SubscriptionLike;
  todayTotal: number;
  filterByPrice: boolean;
  filterByPriceUp: boolean;
  constructor(private modalController: ModalController,
              private dataService: DataService,
              private actionService: ActionService,
              private datetimeService: DatetimeService,
              private actionSheetController: ActionSheetController) {
    // this.expenses = [];
    // this.actionService.getTodayExpensesFromLocal().then((expenses => this.expenses = expenses));
    // this.selectedDate = this.datetimeService.todayDate;
    this.installDate = this.datetimeService.installDate;
    this.todayDate = this.datetimeService.getCurrentDateTime();
    this.expenseTypes = ExpenseTypes;
    this.todayTotal = null;
    // this.selectedDate = this.datetimeService.selectedDate;
    // this.installDate = this.datetimeService.installDate;
    // this.todayDate = this.datetimeService.getCurrentDateTime();
  }

  ngOnInit() {
    this.totalSubscription = this.dataService.getTodayTotalExpense().subscribe((total) => {
      this.todayTotal = total;
    },
        (error) => {
          console.log(error);
        },
        () => {
        }
    );
    this.datesSubscription = this.datetimeService.getSelectedDateSubscription()
        .subscribe((date) => {
          this.selectedDate = date;
        }, (err) => {
          console.log(err);
          }, () => {}
        );
    this.selectedDate = this.datetimeService.getCurrentDateTime();
    this.subscription = this.dataService.getExpensesSubscription()
        .subscribe((expense) => {
          // if (!this.expenses) {
          //   this.expenses = [];
          // }
          if (expense != null) {
            this.expenses = expense;
          } else {
            this.expenses = [];
          }
          // this.expenses.push(expense);
        }, (err) => {
          console.log(err);
            }, () => {}
        );
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ngOnDestroy() {
  }
  changeSelectedDate(value: string): void {
    // this.datetimeService.selectedDate = this.datetimeService.createDateFromString(value);
    this.selectedDate = this.datetimeService.createDateFromString(value);
    this.datetimeService.setSelectedDate(value).then(() => {
      this.actionService.getExpenseByDateFromLocal(this.selectedDate);
    });
  }
  setCurrentTodayDate(): void {
    // this.todayDate = this.datetimeService.getCurrentDateTime();
    // this.selectedDate = this.datetimeService.getCurrentDateTime();
    // this.datetimeService.setSelectedDate(this.datetimeService.getCurrentDateTime());
    // this.selectedDate = this.todayDate;
    this.datetimeService.setSelectedDate(this.datetimeService.getCurrentDateTime()).then(() => {
      this.actionService.getExpenseByDateFromLocal(this.selectedDate);
    });
  }
  changeSelected(val: string): void {
    const tempList = [];
    this.expenses.forEach((expense: Expenseinterface) => {
      if (expense.type === val) {
        tempList.push(expense);
      }
    });
    this.expenses = tempList;
  }
  priceFilterUp(): void {
    this.expenses = this.expenses.sort((a, b) => {
          if (a.amount > b.amount) {
            return this.filterByPriceUp ? 1 : -1;
          }
          if (b.amount > a.amount) {
            return this.filterByPriceUp ? -1 : 1;
          }
          return 0;
        }
    );
    this.filterByPriceUp = true;
  }
  priceFilter(): void {
    this.expenses = this.expenses.sort((a, b) => {
      if (a.amount > b.amount) {
        return this.filterByPriceUp ? 1 : -1;
      }
      if (b.amount > a.amount) {
        return this.filterByPriceUp ? -1 : 1;
      }
      return 0;
    }
    );
    this.filterByPrice = true;
    this.filterByPriceUp = !this.filterByPriceUp;
  }
  async presentFilterActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Price',
        icon: 'logo-usd',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Recent',
        icon: 'cellular-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
