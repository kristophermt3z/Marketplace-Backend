/* 
CREATE TABLE vendedores (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    role VARCHAR DEFAULT 'vendedor'
);
*/

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

import { product } from "./Product.entity";

@Entity()
export class vendedores {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    unique: true,
    nullable: false,
  })
  email!: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  password!: string;

  @Column({
    type: "varchar",
    default: "vendedor",
  })
  role!: string;

  @OneToMany(() => product, (producto) => producto.seller)
  productos!: product[];
}
