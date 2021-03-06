import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Id, Status, Timestamp } from '@type';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn(Id)
  id: number;

  @Column({ length: 200, unique: true, comment: '资源控制代码' })
  key: string;

  @Column({ length: 200, default: 'origin', comment: '资源键父节点' })
  parent: string;

  @Column({ type: 'json', comment: '资源控制名称' })
  name: object;

  @Column(Status(0, '是否为导航（中后台菜单显示）'))
  nav: number;

  @Column(Status(0, '是否为路由（映射前端路由地址）'))
  router: number;

  @Column(Status(0, '是否为策略节点（可关联访问控制）'))
  policy: number;

  @Column({ length: 200, nullable: true, comment: '字体图标' })
  icon: string;

  @Column({ type: 'tinyint', unsigned: true, default: 0, comment: '排序' })
  sort: number;

  @Column(Status())
  status: number;

  @Column(Timestamp)
  create_time: number;

  @Column(Timestamp)
  update_time: number;
}
