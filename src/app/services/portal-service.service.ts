import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ModalState {
  open: boolean;
  position: ModalPosition | undefined;
}

export enum ModalPosition {
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor() { }

  private state$ = new BehaviorSubject<ModalState>({open: false, position: undefined});
  private portal$ = new BehaviorSubject<any>(undefined);
    
  get state(): Observable<ModalState> {
    return this.state$.asObservable();
  }

  get portal(): Observable<any> {
    return this.portal$.asObservable();
  }
    
  open(position: ModalPosition) {
    this.state$.next({open: true, position});
  }

  close() {
    this.state$.next({open: false, position: undefined});
  }

  setModalPortal(portal: any) {
    this.portal$.next(portal);
  }


}