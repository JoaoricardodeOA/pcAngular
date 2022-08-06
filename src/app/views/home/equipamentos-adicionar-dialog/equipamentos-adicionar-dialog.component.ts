import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-equipamentos-adicionar-dialog',
  templateUrl: './equipamentos-adicionar-dialog.component.html',
  styleUrls: ['./equipamentos-adicionar-dialog.component.css']
})
export class EquipamentosAdicionarDialogComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl('')
  }); 
  constructor(public dialogRef: MatDialogRef<EquipamentosAdicionarDialogComponent>,
   private fb: FormBuilder
    ) { 
    }

  ngOnInit(): void {
   
  }
  cancelar(): void {
    this.dialogRef.close();
  }

}
