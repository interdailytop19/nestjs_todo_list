import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
 	username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ username: 1}, { unique: true });