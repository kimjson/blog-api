import { Entity, Column, PrimaryGeneratedColumn, AfterLoad, CreateDateColumn } from "typeorm";
import { format } from 'date-fns';
import { slugify } from "../utils";
import { DATE_FORMAT } from "../constants";

@Entity('posts')
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'varchar', length: 65535 })
  content: string;

  @Column()
  summary: string;

  @Column({ type: 'varchar', length: 20, default: '미분류' })
  category: string;

  protected slug: string;

  @CreateDateColumn()
  createdAt: Date;

  @AfterLoad()
  setSlug() {
    this.slug = `${slugify(this.title)}-${format(this.createdAt, DATE_FORMAT)}`;
  }
}