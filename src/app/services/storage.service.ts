import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public loadFromStorage(entityType){
    const entities = localStorage.getItem(entityType)
    return JSON.parse(entities)
  }
  public saveToStorage(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
  }
}
