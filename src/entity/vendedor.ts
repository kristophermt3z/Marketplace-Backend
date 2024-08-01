import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class vendedores {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "varchar",
        unique: true,
        nullable: false
    })
    email!: string;

    @Column({
        type: "varchar",
        nullable: false
    })
    password!: string;
}
