package main

import (
	"fmt"
	"strconv"
)

type ComplementStack struct {
	stack Stack
}

type ComplementStackI interface {
	IsEmpty() bool
	IsFull() bool
	Push(int)
	Pop() int
	Size() int
	Delete()
	ToHexDecBinString() (string, string, string)
}

var _ ComplementStackI = &ComplementStack{}

func (s *ComplementStack) IsEmpty() bool {
	return s.stack.IsEmpty()
}

func (s *ComplementStack) IsFull() bool {
	return s.stack.IsFull()
}

func (s *ComplementStack) Push(n int) {
	s.stack.Push(n)
}

func (s *ComplementStack) Pop() int {
	return s.stack.Pop()
}

func (s *ComplementStack) Size() int {
	return s.stack.Size()
}

func (s *ComplementStack) Delete() {
	s.stack.data = s.stack.data[:0]
}

func (s *ComplementStack) ToHexDecBinString() (string, string, string) {
	int64Value := s.getInt64Value()

	hexDigit := s.stack.Size()
	binDigit := hexDigit * 4
	return getHexDecBinString(int64Value, hexDigit, binDigit)
}

func (s *ComplementStack) ToHexDecBinComplementString() (string, string, string) {
	array := s.getBinArray()
	cArray := s.convertBinArrayToComplementArray(array)
	int64Value := s.converBinArraytToUint64(cArray)

	hexDigit := s.stack.Size()
	binDigit := hexDigit * 4
	return getHexDecBinString(int64Value, hexDigit, binDigit)
}

func (s *ComplementStack) getInt64Value() uint64 {
	var hexString string
	for _, v := range s.stack.data {
		hexString += fmt.Sprintf("%X", v)
	}

	res, _ := strconv.ParseUint(hexString, 16, 64)
	return res
}

func (s *ComplementStack) getBinArray() []int {
	int64Value := s.getInt64Value()

	var res []int
	for i := 0; i < s.Size()*4; i++ {
		if (int64Value % 2 == 0) {
			res = append(res, 0)
		} else {
			res = append(res, 1)
		}
		int64Value /= 2
	}
	return res
}

func (s *ComplementStack) convertBinArrayToComplementArray(array []int) []int {
	var res []int
	for i, _ := range array {
		res = append(res, 1 - array[i])
	}

	carry := 1
	for i := 0; i < stack.Size(); i++ {
		res[i] = carry + res[i]
		if (res[i] == 2) {
			res[i] = 0
			carry = 1
		} else {
			carry = 0
		}
	}
	return res
}

func (s *ComplementStack) converBinArraytToUint64(array []int) uint64 {
	var res uint64 = 0
	for i := stack.Size()*4-1; i >= 0; i-- {
		res *= 2
		res += uint64(array[i])
	}
	return res
}

func getHexDecBinString(value uint64, hexDigit int, binDigit int) (string, string, string) {
	hexString := fmt.Sprintf("%016X", value)
	decString := fmt.Sprintf("%d", value)
	binString := fmt.Sprintf("%064b", value)
	hexStringLen := len(hexString)
	binStringLen := len(binString)
	return hexString[hexStringLen-hexDigit:], decString, binString[binStringLen-binDigit:]
}