import { Component, OnInit } from '@angular/core';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUserLogedIn = false;
  hideMobileNav = true;
  constructor( router: Router) {
 
        router.events
            .pipe(
                filter(
                    ( event: NavigationEvent ) => {
                        return( event instanceof NavigationStart );
                    }
                )
            )
            .subscribe(
                ( event: NavigationStart ) => {
 
                    console.group( "NavigationStart Event" );
                    console.log( "navigation id:", event.id );
                    console.log( "route:", event.url );
                    console.log( "trigger:", event.navigationTrigger );
                    if ( event.restoredState ) {
 
                        console.warn(
                            "restoring navigation id:",
                            event.restoredState.navigationId
                        );
 
                    }
 
                    console.groupEnd();
					this.hideMobileNav = true;
                }
            )
        ;
 
    }

  ngOnInit() {
  }

}
