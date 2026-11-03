import React from 'react';
import Badge from '../../../components/ui/Badge';
export default function ProjectStatus({ status }) {
  const tone=/complete|handover|presenting/i.test(status)?'success':/development|construction/i.test(status)?'warning':'neutral';
  return <Badge tone={tone}>{status}</Badge>;
}
