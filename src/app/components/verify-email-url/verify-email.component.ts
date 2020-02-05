import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public route:ActivatedRoute
  ) { }
  public mode: string;
  public oobCode: string;
  ngOnInit() {
    this.mode = this.route.snapshot.queryParamMap.get('mode');
    this.oobCode = this.route.snapshot.queryParamMap.get('oobCode');
    if (this.mode === 'resetPassword') {
      this.authService.resetPasswordTokenVerify(this.oobCode);

    } else {
      this.authService.emailVerificationUrl(this.route.snapshot.queryParamMap.get('oobCode'))
    }
  }

  resetPassword(p1,p2) {
    if (p1 === p2) {
      this.authService.resetPassword(p1,this.oobCode);
    }

  }

}
