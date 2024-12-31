import { Lead } from '../models/leadModel';
import { Firestore } from '@google-cloud/firestore';

class FirestoreRepository {
  private db: Firestore;
  private collection: string;

  constructor() {
    this.db = new Firestore();
    this.collection = 'leads';
  }

  async saveLead(leadData: Lead): Promise<Lead> {
    const docRef = this.db.collection(this.collection).doc();
    await docRef.set(leadData);
    const docSnapshot = await docRef.get();
    return { id: docSnapshot.id, ...docSnapshot.data() } as Lead;
  }

  async findAllLeads(): Promise<Lead[]> {
    const snapshot = await this.db.collection(this.collection).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Lead);
  }

  async findLeadById(id: string): Promise<Lead | null> {
    const doc = await this.db.collection(this.collection).doc(id).get();
    if (!doc.exists) {
      return null;
    }
    return { id: doc.id, ...doc.data() } as Lead;
  }

  async updateLead(id: string, leadData: Partial<Lead>): Promise<Lead | null> {
    const docRef = this.db.collection(this.collection).doc(id);
    await docRef.update(leadData);
    const updatedDoc = await docRef.get();
    return { id: updatedDoc.id, ...updatedDoc.data() } as Lead;
  }

  async deleteLead(id: string): Promise<boolean> {
    const docRef = this.db.collection(this.collection).doc(id);
    await docRef.delete();
    return true;
  }
}

export default FirestoreRepository;