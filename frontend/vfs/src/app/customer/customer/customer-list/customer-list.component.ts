import { ConfirmationDialogComponent } from './../../../shared/ui/confirmation-dialog/confirmation-dialog.component';
import { CustomerService } from './../../customer.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Array<any>;

  constructor(protected customerService: CustomerService, public dialog: MatDialog) { }

  loadData() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data.content;
    });
  }

  ngOnInit() {
    this.loadData();
  }

  confirmDelete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { width: '250px', data: {}});
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.customerService.remove(id).subscribe(result => {
          this.loadData();
        }, error => console.error(error));
      }
    });
  }
}
