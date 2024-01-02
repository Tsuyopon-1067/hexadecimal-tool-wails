package main

import (
	"context"
	"fmt"
)

type ValueData struct {
	value HexDecBin
	complementValue HexDecBin
}

type HexDecBin struct {
	hex string
	dec string
	bin string
}

var stack ComplementStack

type Complement struct {
	ctx context.Context
}

func NewComplement() *Complement {
	stack = ComplementStack{}
	return &Complement{}
}

func (c *Complement) startup(ctx context.Context) {
	c.ctx = ctx
}

func (c *Complement) Push(v int) {
	if (stack.IsFull()) {
		fmt.Println("error: stack is full.")
		return
	}
	stack.Push(v)
}

func (c *Complement) Pop() {
	if (stack.IsEmpty()) {
		fmt.Println("error: stack is empty.")
		return
	}
	stack.Pop()
}

func (c *Complement) GetValueData() ValueData {
	hex, dec, bin := stack.ToHexDecBinString()
	cHex, cDec, cBin := stack.ToHexDecBinComplementString()
	normal := HexDecBin{hex, dec, bin}
	complement := HexDecBin{cHex, cDec, cBin}
	fmt.Println(ValueData{normal, complement})
	return ValueData{value: normal, complementValue: complement}
}