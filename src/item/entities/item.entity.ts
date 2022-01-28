import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", type: "varchar", length: 50 })
    name: string;

    @Column({ name: "quantity", type: "int" })
    quantity: number;

    @Column({ name: "description", type: "varchar", nullable: true, length: 255 })
    description?: string;

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP"
    })
    updatedAt: Date;
}
