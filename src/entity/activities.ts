import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Id, Status, Timestamp } from '@type';

@Entity()
export class Activities {
  @PrimaryGeneratedColumn(Id)
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '平台' })
  platform: string;

  @Column({ type: 'varchar', length: 50, comment: '登录用户名' })
  username: string;

  @Column({ type: 'varchar', length: 200, comment: '网络地址' })
  ip: string;

  @Column({ type: 'varchar', length: 50, comment: '国家' })
  country: string;

  @Column({ type: 'varchar', length: 50, comment: '地区' })
  region: string;

  @Column({ type: 'varchar', length: 50, comment: '省' })
  province: string;

  @Column({ type: 'smallint', comment: '城市编码', default: 0 })
  city_id: number;

  @Column({ type: 'varchar', length: 50, comment: '城市' })
  city: string;

  @Column({ type: 'varchar', length: 50, comment: 'ISP信息' })
  isp: string;

  @Column(Status(0, '登录状态'))
  logged: number;

  @Column({ type: 'text', nullable: true, comment: 'User Agent' })
  device: string;

  @Column({ type: 'text', nullable: true, comment: '失败密码记录' })
  password: string;

  @Column({ type: 'text', nullable: true, comment: '风险内容' })
  risk: object;

  @Column(Timestamp)
  time: number;
}
