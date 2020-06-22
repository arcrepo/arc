import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Package extends Document {
  // Package Name
  @Prop({
    required: true,
  })
  package_name: string;

  // Name
  @Prop({
    required: false,
  })
  name: string;

  // Depends
  @Prop({
    required: true,
  })
  depends: string;

  // Suite
  @Prop({
    required: true,
  })
  suite: string;

  // Version
  @Prop({
    required: true,
  })
  version: string;

  // Architecture
  @Prop({
    required: false,
  })
  arch: false;

  // Description
  @Prop({
    required: false,
  })
  description: string;

  // Maintainer
  @Prop({
    required: true,
  })
  maintainer: string;

  // Author
  @Prop({
    required: true,
  })
  author: string;

  // Section
  @Prop({
    required: true,
  })
  section: string;

  // Depiction
  @Prop({
    required: true,
  })
  depiction: string;

  @Prop()
  views: number;
}
