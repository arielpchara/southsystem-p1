import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { Observable, Subscription } from 'rxjs';
import { SSTDialogComponent } from '@southsystem/modal/lib/dialog/dialog.component';
import { SSTSearchService } from '@southsystem/search';

@Component({
  selector: 'app-index',
  template: `
    <div class="container-fluid">
      <h1>Usuários</h1>
      <hr />
      <button class="btn btn-primary" routerLink="./new">Novo usuário</button>
      <div class="mt-4">
        <table class="table">
          <tr *ngFor="let user of users$ | async">
            <td>{{user?.name}}</td>
            <td>{{user?.email}}</td>
            <td>
              <button class="btn btn-sm btn-danger" (click)="onClickRemove(user, dialog)"> Remove </button>
            </td>
          </tr>
        </table>
        <sst-dialog #dialog confirmLabel="Sim, porque não?" (confirm)="onConfirmRemove($event)">
          Remover o usuário {{userSelected?.name}} ?
        </sst-dialog>
      </div>
    </div>
  `,
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit, OnDestroy {

  public userSelected: User;
  public users$: Observable<User[]> = this.userService.getAll();

  private termSubscribe: Subscription;

  constructor(
    private userService: UserService,
    private searchService: SSTSearchService
  ) { }

  ngOnInit() {
    this.termSubscribe = this.searchService.term$.subscribe( term => {
      console.log(term);
    });
  }

  ngOnDestroy() {
    this.termSubscribe.unsubscribe();
  }

  onClickRemove(user: User, dialog: SSTDialogComponent) {
    this.userSelected = user;
    dialog.show();
  }

  onConfirmRemove(e) {
    console.log('removido', e);
  }

}
