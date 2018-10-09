import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';
import { fadeAnimation } from '../fadeIn';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css'],
  animations: [fadeAnimation]
})
export class AppNavComponent {

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService) {}
ngOnInit(): void {
//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//Add 'implements OnInit' to the class.
// $('.letter').mouseenter(() => {
//     $('.letter').fadeOut(500, function() {
//         $(this).animate().css({
//           "color":"blue",
//           "padding-left":"20px"
//         })
//         $(this).fadeIn(500).text("Gan M");
   
//   }).mouseleave(function() {
//     $(this).animate().css({
//       "color":"red",
//       "padding-left":"37%"
//     })
//     $(this).fadeIn(500).text("G")
//     // $(this).toggle();
//   });
// }
  }
}
