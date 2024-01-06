import { Component } from '@angular/core';
import { Nav2Component } from '../../shared/nav2/nav2.component';
import { ApiProvider } from '../../providers/api.prov'
import { MatDialog } from '@angular/material/dialog';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Nav2Component],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menus : any = [];
  constructor(
    private apiProv: ApiProvider,
    public dialog: MatDialog
  ){
    this.getBooks()
  }

  public getBooks(){
    this.apiProv.getBooks().then(res => {
      this.menus = res.data;
    })
  }

  public newMenuModal(){
    const dialogRef = this.dialog.open(MenuModalComponent, {
      data: {
        new: true
      },
      disableClose: true,
      hasBackdrop: true,
      width: '80%',
      height: '80%'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getBooks();
    });
  }

  public updateMenuModal(book: any){
    const dialogRef = this.dialog.open(MenuModalComponent, {
      data: {
        new: false,
        bookId: book._id,
        titulo: book.titulo,
        autor: book.autor,
        isbn: book.isbn,
        genero: book.genero,
        precio: book.precio,
        stock: book.stock,
        img: book.img
      },
      disableClose: true,
      hasBackdrop: true,
      width: '80%',
      height: '80%'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getBooks();
    });
  }


}
