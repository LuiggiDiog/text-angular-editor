import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  docData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import Journey from '../interfaces/journey.interface';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  constructor(private firestore: Firestore) {}

  addJourney(journey: Journey) {
    const journeyRef = collection(this.firestore, 'journeys');
    return addDoc(journeyRef, journey);
  }

  getJourney(id: string) {
    const journeyRef = doc(this.firestore, `journeys/${id}`);
    return docData(journeyRef);
  }

  putJourney(journey: Journey) {
    const journeyRef = doc(this.firestore, `journeys/${journey.id}`);
    return updateDoc(journeyRef, {
      text: journey.text,
    });
  }
}
