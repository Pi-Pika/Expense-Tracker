"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';

import { UserButton } from '@clerk/nextjs'
import { Car } from 'lucide-react';
import Cardinfo from './_components/Cardinfo';

function Dashboard() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState([]);
  
  
  useEffect(() => {
    user&&getBudgetList();
  }, [user])

  // Get budgetlist

  const getBudgetList=async()=> {
    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql `sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql `count(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
    .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id))
    ;

    setBudgetList(result);
  };
  return (
    <div className='p-10'>
      <h2 className='font-bold text-3xl'>Hello, {user?.fullName} 🤘</h2>
      <p className='text-gray-700'>Are you spending your money wisely? 🤔 Let's manage your expenses! 😊</p>

      <Cardinfo budgetList={budgetList}/>
    </div>
  )
}

export default Dashboard