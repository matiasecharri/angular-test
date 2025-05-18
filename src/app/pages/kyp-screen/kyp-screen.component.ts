import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import {
  ChangeDetectionStrategy,
  OnDestroy,
  Component,
  inject,
  ViewChild,
  ContentChild,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-kyp-screen',
  imports: [MatButtonModule, MatDialogModule, ModalComponent],
  templateUrl: './kyp-screen.component.html',
  standalone: true,
  styleUrl: './kyp-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KypScreenComponent implements OnDestroy {
  @ViewChild('forceDialog', { static: true }) dialogElement: any;

  subscriptions: Subscription = new Subscription();

  constructor(private dialog: MatDialog) {}

  buttons = [
    { label: 'reset', value: 'Austin Blankenship' },
    { label: 'reject', value: 'Austin Blankenship' },
    { label: 'force approve', value: 'Austin Blankenship' },
  ];

  fields = [
    { label: 'Name', value: 'Austin Blankenship' },
    { label: 'Affiliate Id', value: '4575693' },
    {
      label: 'Application Status',
      value: 'Has rejected documents',
      span: '--span',
    },
    { label: 'Company', value: '-' },
    { label: 'Registration Date', value: '10–09–2024' },
    { label: 'Last Update Date', value: '26–09–2024' },
    { label: 'Email', value: 'blankenship@gmail.com' },
    { label: 'Address', value: '-' },
    { label: 'URL', value: '-' },
  ];

  openForceModal(): void {
    const dialogRef = this.dialog.open(this.dialogElement);

    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
