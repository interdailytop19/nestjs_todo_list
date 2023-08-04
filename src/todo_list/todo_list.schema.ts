import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Types } from 'mongoose';

export type Todo_listDocument = HydratedDocument<Todo_list>;

@Schema()
export class Todo_list {
  @Prop({ required: true })
 	user: Types.ObjectId;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop()
	due_date: Date;
	@Prop({default: false})
	is_finish: boolean;
	@Prop({default: Date.now})	
	created_at: Date;
	@Prop({default: null})
	updated_at: Date;
}

export const Todo_listSchema = SchemaFactory.createForClass(Todo_list);