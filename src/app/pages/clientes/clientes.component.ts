import { Component } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { ApiProvider } from '../../providers/api.prov'
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { ClienteModalComponent } from '../cliente-modal/cliente-modal.component';
import { Nav2Component } from '../../shared/nav2/nav2.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [Nav2Component],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  public clientes : any = [];
  constructor(
    private apiProv: ApiProvider,
    public dialog: MatDialog
  ){
    this.getClientes()
  }

  public getClientes(){
    this.apiProv.getClientes().then(res => {
      this.clientes = res.data;
    })
  }

  public newClienteModal(){
    const dialogRef = this.dialog.open(ClienteModalComponent, {
      data: {
        new: true
      },
      disableClose: true,
      hasBackdrop: true,
      width: '80%',
      height: '80%'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getClientes();
    });
  }

  public updateClienteModal(cliente: any){
    const dialogRef = this.dialog.open(ClienteModalComponent, {
      data: {
        new: false,
        clienteId: cliente._id,
        nombres: cliente.nombres,
        aPaterno: cliente.aPaterno,
        aMaterno: cliente.aMaterno,
        fecNac: cliente.fecNac
      },
      disableClose: true,
      hasBackdrop: true,
      width: '80%',
      height: '80%'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getClientes();
    });
  }

  public deleteCliente(cliente: any){
    Swal.fire({
      showCancelButton: true,
      title: '¿Desea eleiminar cliente: '+ cliente.nombres + ' ?',
      confirmButtonText: "Confirmar",
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.apiProv.deleteCliente(cliente._id)
        .then(
          (res) => {
            Swal.fire({
              title: "cliente Eliminado",
              icon: "success"
            });
            this.getClientes();
          }
        );
      }
    });
  }


}
