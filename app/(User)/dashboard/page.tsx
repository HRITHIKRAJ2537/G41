'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'
import { Badge } from '../../../components/ui/badge'
import { Switch } from '../../../components/ui/switch'
import { Label } from '../../../components/ui/label'
import { AlertCircle, ArrowDownCircle, ArrowUpCircle, Wallet, CreditCard, Clock, ChevronRight, DollarSign, Activity, RefreshCcw, User, Share2, ExternalLink } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Link from 'next/link'
import Web3 from 'web3'

// Mock data for charts
const balanceHistory = [
  { date: 'Jan', value: 300 },
  { date: 'Feb', value: 450 },
  { date: 'Mar', value: 400 },
  { date: 'Apr', value: 650 },
  { date: 'May', value: 500 },
]

// Mock data for transactions
const recentTransactions = [
  { id: 1, user: "Cafeteria", type: 'Payment', amount: -50, timestamp: '2023-05-05 10:30', status: 'Completed' },
  { id: 2, type: 'Deposit', user: "Bank Transfer", amount: 500, timestamp: '2023-05-04 14:15', status: 'Completed' },
  { id: 3, type: 'Transfer', user: "John Smith", amount: -200, timestamp: '2023-05-03 09:45', status: 'Completed' },
  { id: 4, type: 'Received', user: "Library", amount: 100, timestamp: '2023-05-02 11:20', status: 'Completed' },
  { id: 5, type: 'Deposit', user: "Scholarship", amount: 1000, timestamp: '2023-05-01 08:30', status: 'Completed' },
]

// Mock data for popular services
const popularServices = [
  { id: 1, name: "Cafeteria", icon: "🍕" },
  { id: 2, name: "Library", icon: "📚" },
  { id: 3, name: "Bookstore", icon: "🛒" },
  { id: 4, name: "Printing", icon: "🖨️" },
]

export default function DashboardPage() {
 
const [walletAddress, setWalletAddress] = useState<string | null>(null);
const [balance, setBalance] = useState<string | null>(null);
const [web3, setWeb3] = useState<Web3 | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [notifications, setNotifications] = useState<boolean>(true);

  // Function to connect to the local blockchain (Ganache)
  const connectBlockchain = async () => {
    setLoading(true)
    try {
      // Connect to local Ganache instance
      const web3Instance = new Web3("http://127.0.0.1:7545")

      // Fetch accounts from Ganache
      const accounts = await web3Instance.eth.getAccounts()

      // Set the first account as the default wallet
      setWalletAddress(accounts[0])

      // Fetch and set balance of the account
      const balanceInWei = await web3Instance.eth.getBalance(accounts[0])
      setBalance(web3Instance.utils.fromWei(balanceInWei, "ether"))

      // Store the web3 instance in state for later use
      setWeb3(web3Instance)
    } catch (error) {
      console.error("Failed to connect:", error)
    } finally {
      setLoading(false)
    }
  }

  // Format wallet address to shorter version
  const formatAddress = (address?: string) => {
    if (!address) return ""
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  return (
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Campus Currency Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage your digital currency balance and transactions</p>
          </div>
          <div className="flex items-center gap-4">
            {walletAddress ? (
                <Badge variant="outline" className="flex items-center gap-2 py-2">
                  <Wallet className="h-4 w-4" />
                  {formatAddress(walletAddress)}
                </Badge>
            ) : null}
            <Avatar>
              <AvatarImage src="/api/placeholder/32/32" alt="Student" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Balance Overview</CardTitle>
                <CardDescription>Your current Campus Points</CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <RefreshCcw className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              {balance === null ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <Wallet className="h-12 w-12 text-gray-400" />
                    <div className="text-center">
                      <h3 className="text-lg font-medium">Connect Your Wallet</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Connect to see your campus currency balance</p>
                      <Button onClick={connectBlockchain} disabled={loading} className="w-full md:w-auto">
                        {loading ? "Connecting..." : "Connect Wallet"}
                      </Button>
                    </div>
                  </div>
              ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Balance</p>
                        <h2 className="text-4xl font-bold">{balance} ETH</h2>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex items-center gap-2">
                          <ArrowUpCircle className="h-4 w-4" />
                          Send
                        </Button>
                        <Button className="flex items-center gap-2">
                          <ArrowDownCircle className="h-4 w-4" />
                          Receive
                        </Button>
                      </div>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={balanceHistory}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#000000" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-24 flex flex-col justify-center" asChild>
                  <Link href="/deposit">
                    <ArrowDownCircle className="h-6 w-6 mb-2" />
                    <span>Deposit</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col justify-center" asChild>
                  <Link href="/transfer">
                    <Share2 className="h-6 w-6 mb-2" />
                    <span>Transfer</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col justify-center" asChild>
                  <Link href="/history">
                    <Clock className="h-6 w-6 mb-2" />
                    <span>History</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col justify-center" asChild>
                  <Link href="/profile">
                    <User className="h-6 w-6 mb-2" />
                    <span>Profile</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Your recent activity</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="payments">Payments</TabsTrigger>
                  <TabsTrigger value="deposits">Deposits</TabsTrigger>
                  <TabsTrigger value="transfers">Transfers</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center border-b pb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                            {transaction.amount > 0 ? (
                                <ArrowDownCircle className="h-5 w-5 text-green-600" />
                            ) : (
                                <ArrowUpCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{transaction.type}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount} Points
                          </p>
                          <p className="text-xs text-gray-500">{transaction.timestamp}</p>
                        </div>
                      </div>
                  ))}
                </TabsContent>
                <TabsContent value="payments">
                  {recentTransactions.filter(t => t.amount < 0 && t.type === 'Payment').map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center border-b pb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-red-100">
                            <ArrowUpCircle className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">{transaction.type}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-red-600">{transaction.amount} Points</p>
                          <p className="text-xs text-gray-500">{transaction.timestamp}</p>
                        </div>
                      </div>
                  ))}
                </TabsContent>
                <TabsContent value="deposits">
                  {recentTransactions.filter(t => t.type === 'Deposit').map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center border-b pb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-green-100">
                            <ArrowDownCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{transaction.type}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">+{transaction.amount} Points</p>
                          <p className="text-xs text-gray-500">{transaction.timestamp}</p>
                        </div>
                      </div>
                  ))}
                </TabsContent>
                <TabsContent value="transfers">
                  {recentTransactions.filter(t => t.type === 'Transfer' || t.type === 'Received').map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center border-b pb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                            {transaction.amount > 0 ? (
                                <ArrowDownCircle className="h-5 w-5 text-green-600" />
                            ) : (
                                <ArrowUpCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{transaction.type}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount} Points
                          </p>
                          <p className="text-xs text-gray-500">{transaction.timestamp}</p>
                        </div>
                      </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="outline" asChild>
                <Link href="/history" className="flex items-center gap-1">
                  View All Transactions
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Campus Services</CardTitle>
                <CardDescription>Quick payment options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {popularServices.map((service) => (
                      <Button key={service.id} variant="outline" className="w-full justify-start gap-3">
                        <span className="text-xl">{service.icon}</span>
                        <span>{service.name}</span>
                      </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Dashboard preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Notifications</Label>
                    <p className="text-sm text-gray-500">Get alerts on transactions</p>
                  </div>
                  <Switch
                      id="notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="darkMode">Dark Mode</Label>
                    <p className="text-sm text-gray-500">Toggle color theme</p>
                  </div>
                  <Switch id="darkMode" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}