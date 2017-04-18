import {Component} from "@angular/core";
import {ModalModule} from "ngx-modal";
import {NgModule} from "@angular/core/src/metadata/ng_module";



@Component({
  selector: "edit",
  template: `
<div class="row">
    <button (click)="myModal.open()">open my modal</button>
    <modal #myModal>
        <modal-header>
            <h1>Modal header</h1>
        </modal-header>
        <modal-content>
            Hello Modal!
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="myModal.close()">close</button>
        </modal-footer>
    </modal>
</div>
    `,
  styleUrls: ['./contact.edit.modal.css']
})
export class EditModal {
  Myedit () {

  }

}

// @NgModule({
//   imports: [
//
//     ModalModule
//   ],
//   declarations: [
//
//   ],
//   bootstrap: [
//
//   ]
// })
// export class AppModule {
//
// }

//
// })
//
//
//   myEdit() {
//   modal.alert()
//
//     .open()
//
//
//     .close(this.contactsService.editcontact(firstname, lastname))
//
// .message('Edit Contact')
// }
//
// }
