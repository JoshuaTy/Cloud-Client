import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { config } from "src/app/_config/config";

@Component({
  selector: "app-delete-button",
  templateUrl: "./delete-button.component.html",
  styleUrls: ["./delete-button.component.scss"]
})
export class DeleteButtonComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  @Input() rowData: any;
  id: number;
  ngOnInit() {
    this.id = this.rowData.id;
  }

  delete() {
    console.log(
      "deleting",
      this.id,
      `${config.apiUrl}/users/delete/${this.id}`
    );
    return this.http.post<any>(`${config.apiUrl}/users/delete`, this.id).pipe(
      map(x => {
        console.log(x);
        return x;
      })
    );
  }
}
