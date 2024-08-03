/* 
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    sku VARCHAR NOT NULL UNIQUE,
    quantity INT NOT NULL,
    price DECIMAL NOT NULL,
    seller_id INT REFERENCES vendedores(id)
);
*/

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { vendedores } from "./vendedor";

@Entity()
export class product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  sku!: string;

  @Column("int")
  quantity!: number;

  @Column("decimal")
  price!: number;

  @ManyToOne(() => vendedores, (vendedor) => vendedor.productos)
  @JoinColumn({ name: "seller_id" }) 
  seller!: vendedores;
}
