import { Company } from './../../model/company.model';
import { CompaniesDbService } from './../../services/companies-db.service';
import { ComponentInfoService } from './../../services/component-info.service';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  isLoading = true;
  getAllCompaniesSub: Subscription;

  companiesArr: Company[];
  dataSource: MatTableDataSource<any>;

  // displayedColumns = ['id', 'name', 'city', 'country'];
  displayedColumns = ['id', 'name', 'phrase', 'city', 'country'];

  constructor(
    private componentInfoService: ComponentInfoService,
    private companyDb: CompaniesDbService
  ) {
    this.componentInfoService.updateComponentHeading('Table');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.getAllCompaniesSub = this.companyDb
      .getAllCompanies()
      .subscribe((resultArr) => {
        this.companiesArr = resultArr;
        // console.log(resultArr);

        this.dataSource = new MatTableDataSource(this.companiesArr);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.getAllCompaniesSub) {
      this.getAllCompaniesSub.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
